<?php
/*
Template Name: page_reports
*/
?>
<?php
/**
 * @package WordPress
 * @subpackage Default_Theme
 */

get_header(); ?>
	
	<div class="content">
				<div class="main">	
					<div class="postambule postambuleInnerPage">
						<h2>Reports</h2>
						<div class="line"></div>
						<p><strong>We don’t deal with guess work, our aim is to win!</strong><br>Below you can see here our performance over the past period.<br>This table will be updated every few days.<br>Remember – these could have been your profits – <br><a href="http://www.a2zsignals.com/subscribe" title="">subscribe now</a> and enjoy this service.</p>
					</div>
				</div>
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
					<div class="imm" id="post-<?php the_ID(); ?>">					
						<?php the_content('<p class="serif">Read the rest of this page &raquo;</p>'); ?>
						<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
					</div>	
					<?php endwhile; endif; ?>
				<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>	
				
			</div>
		</div>	
	<!-- / Wrapper -->
	

<?php get_footer(); ?>
