import React from 'react';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';


const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;

console.log(url);





const Search = ({ value, onChange, onSubmit,  children }) => 
  <form onSubmit={onSubmit}>
    {children} <input
    type="text"
    value={value}
    onChange={onChange}
    />

    <button type="submit">
      {children}
    </button>

  </form>





function Table(props) {
    const { list, onDismiss } = props;

    const largeColumn = {
    width: '40%',
    };
    const midColumn = {
    width: '30%',
    };
    const smallColumn = {
    width: '10%',
    };

    return (
          <div className="table">
              {list.map(item =>
                  <div key={item.objectID}>
                    <span style={largeColumn}>
                    <a href={item.url}>{item.title}</a>
                    </span>
                    <span style={midColumn}>
                    {item.author}
                    </span>
                    <span style={smallColumn}>
                    {item.num_comments}
                    </span>
                    <span style={smallColumn}>
                    {item.points}
                    </span>
                    <span style={smallColumn}>
                      <Button onClick={() => onDismiss(item.objectID)}>
                        Отбросить
                      </Button>
                    </span>
                  </div>
              )}

      </div>
    );
}

function Button(props) {
    const {
    onClick,
    className = '',
    children,
    } = props;
    return (
      <button
        onClick={onClick}
        className={className}
        type="button"
        >
        {children}
      </button>
    );
}




class App extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
        results: null,
        searchKey: '',
        searchTerm: DEFAULT_QUERY,
      };

      this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
      this.onDismiss = this.onDismiss.bind(this); 
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
      this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
  
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey]
    ? results[searchKey].hits
    : [];
    const updatedHits = [
      ...oldHits,
      ...hits
      ];
    this.setState({
      results: {
        ...results,
        [searchKey]: { hits: updatedHits, page }
        }  
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedHits = this.state.result.hits.filter(isNotId);
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  onSearchSubmit(event) {
    const {searchTerm} = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  


  render() {
    const { searchTerm, result } = this.state;
    if (!result) { return null; }
    const page = (result && result.page) || 0;

    return (
      <div className="App">

        <div className="page">
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
              >
              Поиск
            </Search>
          </div>
          

          { result &&
            <Table
            list={result.hits}
            onDismiss={this.onDismiss}
            />
            }

          <div className="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
            Больше историй
          </Button>
          </div>



        </div>

      </div>
    );
  }
}


export default App;

