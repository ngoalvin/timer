const args = process.argv.slice(2);

const timer = function(arg) {
  for (let i = 0; i < arg.length; i++) {
    setTimeout(() => {
      if (i === arg.length - 1) {
        process.stdout.write('.');
        console.log('\n');
      } else {
        process.stdout.write('.');
      }
    },arg[i] * 1000);
  }
};

timer(args);
