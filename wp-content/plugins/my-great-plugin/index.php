<?php

/**
 * Plugin Name: My Great Plugin
 * Plugin URI: https://github.com/ryanwelcher/twitch/tree/stream/sept-17-2021/plugins/my-great-plugin
 * Description: From Live Coding Session on https://www.youtube.com/watch?v=riqDs7nBMGg
 * 
 */

 function register_block() {
	register_block_type( __DIR__);
}

add_action( 'init', 'register_block' );