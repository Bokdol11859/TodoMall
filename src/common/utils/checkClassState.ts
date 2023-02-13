import Class from '../types/Class.type';
import Session from '../types/Session.type';

let currentTime = Date.parse(new Date().toJSON());

export const checkSuccess = (_class: Class) =>
  _class.sessions.filter((session: Session) => session.status === true).length === _class.sessions.length;

export const checkFail = (_class: Class) =>
  _class.sessions.filter((session: Session) => {
    if (!session.status) {
      let expireTime = Date.parse(session.expireDate);
      return expireTime <= currentTime;
    }
  }).length > 0;

export const checkIsNotFail = (_class: Class) =>
  _class.sessions.filter((session: Session) => {
    if (!session.status) {
      let expireTime = Date.parse(session.expireDate);
      return expireTime > currentTime;
    }
  }).length > 0;

export const checkIsNotSuccess = (_class: Class) =>
  _class.sessions.filter((session: Session) => session.status === true).length !== _class.sessions.length;
