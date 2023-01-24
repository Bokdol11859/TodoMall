import { checkSuccess, checkFail, checkIsNotFail, checkIsNotSuccess } from './checkClassState';
import Class from '../types/Class.type';

const separateClassesByState = (classes: Class[] = []) => {
  let successClasses: Class[] = classes.filter(checkSuccess);

  let failClasses: Class[] = classes.filter(checkFail);

  let ongoingClasses: Class[] = classes.filter(checkIsNotFail).filter(checkIsNotSuccess);

  return { successClasses, failClasses, ongoingClasses };
};

export default separateClassesByState;
