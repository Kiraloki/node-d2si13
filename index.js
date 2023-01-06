for (let i = 1; i <= 100; i++) {
  i % 3 == 0
    ? i % 5 == 0
      ? console.log('amazon')
      : console.log('google')
    : i % 5 == 0
    ? console.log('facebook')
    : console.log(i);
}
