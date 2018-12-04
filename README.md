# Advent of Code 2018

This repository contains my solutions for the Advent of Code 2018 challenges.

## Prerequisites

- Node (v8+)
- npm

## Running

Simply run the following from the root directory:

```shell
# {DAY} should be replaced by the day, formatted as dec-1
# {PART} should be replaced by `part1` or `part2`
$ node {DAY}/{PART}.js
```

The answer will log to the console.

## Implementation Details

In all my scripts I assume that the input, if there is any, will be in a file called `input.txt` in the same directory and the script being run.

I have factored out the method of grabbing the data from the input file into `util/input.js`. It exports a `getInput()` method. This is so I don't have to re-write that for every challenge.
