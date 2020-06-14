// This is an inline comment.
const x = 1;

/** This is a multi-line comment. When the variable is hovered, it will display this comment. */
const y = 2;

/**
 * This is a multi-line comment.
 * When the variable is hovered, it will display this comment.
 */
const z = 3;

// Note that the output comment for `y` and `z` are the same, despite we use line break in the comment.

// If we later use `y` and `z`, when we hover over them, we can see
// the JSDoc comments. This enables us to infer what kind of variable are they
// without needing to scroll up (assuming that this file has ~500 lines or so).

//
//
const total = y + z;
