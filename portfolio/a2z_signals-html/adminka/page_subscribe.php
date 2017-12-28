<?php
/*
Template Name: page_subdcribe
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
						<h2>Subscribe NOW!</h2>
						<div class="line"></div>
						<p>We offer 3 unique monthly plans:</p>
					</div>
				</div>
				<div class="persons">
					<div class="personsInner">
						<ul class="list listSub">
							<li class="li-01">
								<div class="listInner">
									<div class="listInnerTitle">
										<div class="txx">
											<h5>Easytrader</h5>
											<b><sup>$</sup>229</b>
										</div>
									</div>
									<div class="listInnerEnter">
										<div class="listInnerEnterText">
											<p>Short term subscriptions</p>
											<p>Forex Signals Only straight to your phone by SMS.</p>
										</div>
									</div>
								</div>
							</li>
							<li class="li-02">
								<div class="listInner">
									<div class="listInnerTitle">
										<div class="txx">
											<h5>dailytrader</h5>
											<b><sup>$</sup>350</b>
										</div>
									</div>
									<div class="listInnerEnter">
										<div class="listInnerEnterText">
											<p>Short and Medium term</p>
											<p>Forex and Commodities Signals straight to your phone by SMS.</p>
										</div>
									</div>
								</div>
							</li>
							<li class="li-03">
								<div class="listInner">
									<div class="listInnerTitle">
										<div class="txx">
											<h5>protrader</h5>
											<b><sup>$</sup>509</b>
										</div>
									</div>
									<div class="listInnerEnter">
										<div class="listInnerEnterText">
											<p>Medium and Long term</p>
											<p>Indices and Shares Signals straight to your phone by SMS.</p>
										</div>
									</div>
								</div>
							</li>
						</ul>						
					</div>		
				</div>
				<div class="main">
					<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
				
							<div class="inside insideSecond" id="post-<?php the_ID(); ?>">	
								<div class="block">
									<h2>Contact us to subscribe</h2>
									<div class="line"></div>
									<div class="contactForm">
										
										<?php the_content('<p class="serif">Read the rest of this page &raquo;</p>'); ?>

										<?php wp_link_pages(array('before' => '<p><strong>Pages:</strong> ', 'after' => '</p>', 'next_or_number' => 'number')); ?>
										
										
									</div>
								</div>	
							</div>
							
						<?php endwhile; endif; ?>
					<?php edit_post_link('Edit this entry.', '<p>', '</p>'); ?>			
					
				</div>
			</div>
		</div>	
	<!-- / Wrapper -->
	
	
	
	
	
	
	



<?php get_footer(); ?>
