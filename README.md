# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript type error and its solution. The error arises when attempting to pass an array of strings to a function expecting a single string argument.

## Problem

The `greeter` function is designed to accept a single string and return a greeting. However, the code attempts to pass an array of strings as an argument.

## Solution

The solution involves either modifying the function to accept an array of strings or modifying how the argument is passed to the function.  This example demonstrates modifying the function to handle an array and iterating over it.