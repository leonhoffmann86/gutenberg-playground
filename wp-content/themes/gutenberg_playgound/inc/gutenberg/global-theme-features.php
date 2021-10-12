<?php 

// Gutenberg Custom functions
function bwr_lh_gutenberg_colors() {  

  add_theme_support( 'editor-color-palette', array(
    array(
      'name' => 'White',
      'slug' => 'slug',
      'color' => '#ffffff'
    )
  ) );
  
}

add_action('init', 'bwr_lh_gutenberg_colors');

function bwr_lh_gutenberg_blocks() {

  wp_register_script( 'cta-block', get_template_directory() . '/js/cta-block.js', array());
  
  register_block_type( 'gutenberg/cta-block', array(
    'editor-script' => 'cta-block',
    
  ) );
}