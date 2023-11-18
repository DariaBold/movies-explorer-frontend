const PATTERN__EMAIL =
  "^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$";
const PATTERN__NAME = "^[A-Za-zА-Яа-яЁё /s -]+$";
const DATE = new Date(Date.now()).getFullYear();
export { PATTERN__EMAIL, PATTERN__NAME, DATE };
