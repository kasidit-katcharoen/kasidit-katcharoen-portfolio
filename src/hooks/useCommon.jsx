"use client";

import messages from "../messages/messages";

export function validateEmail(value) {
  let callback = {
    valid: true,
    message: "",
  };
  if (!value) {
    callback.valid = false;
    callback.message = 'empty';
    return callback;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    callback.valid = false;
    callback.message = 'invalid';
    return callback;
  }
  return callback;
}

export function validateText(value) {
  let callback = {
    valid: true,
    message: "",
  };

  if (!value) {
    callback.valid = false;
    callback.message = 'empty';
    return callback;
  }
  return callback;
}
