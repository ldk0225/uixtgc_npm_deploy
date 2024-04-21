#!/usr/bin/env node

const { Command } = require('commander');
// const { add } = require("tgc-npm-util-prc");
const program = new Command();

program
    .version('0.0.1-cli')
    .description('덧셈 계산기')
    .option('-a, --a <number>', 'arg1 num', parseInt)
    .option('-b, --b <number>', 'arg2 num', parseInt)
    .action((options) => {
        console.log(add(options.a, options.b));
    });
program.parse(process.argv);
