import expect from 'expect';
import { test } from 'picomatch';
import {taskFirst, taskNext, getLast } from './0-constants';

describe("Task constants", () => {
  test("taskFirst returns 'I prefer const when I can.'", () => {
    expect(taskFirst()).toEqual("I prefer const when I can.");
  });

  test("getLast returns 'is okay'", () => {
    expect(getLast()).toEqual("is okay");
  });s

  test("taskNext returns 'But sometimes let is okay'", () => {
    expect(taskNext()).toEqual("But sometimes let is okay");
  });
});
