// Will this program produce an error when run? Why or why not?

const FOO = "bar";
{
  const FOO = "qux";
}

console.log(FOO);

// program logs 'bar'. It doesn't produce an error.
// like let statement, const statement created variables that are block scoped.
// FOO variable created inside the block is only visible inside that block.
