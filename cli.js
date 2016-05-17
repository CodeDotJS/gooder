#!/usr/bin/env node

'use strict';

const gooder = require('gooder');

const https = require('follow-redirects').https;

const mkdirp = require('mkdirp');

const updateNotifier = require('update-notifier');

const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const colors = require('colors/safe');

const argv = require('yargs')
	.usage(colors.cyan.bold('\nUsage: $0 <command/option> [target]'))

	.command(' u', ' ❱ required before URL')

	.demand(['u',])

	.describe('u', ' ❱ Google Drive URL')

	.example('$0 -u https://drive.google.com...xyz')

	.argv;

const startURL = argv.u.toString();

const trimPart = gooder(startURL);