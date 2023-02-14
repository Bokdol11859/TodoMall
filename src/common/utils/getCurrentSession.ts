import Session from '@src/common/types/Session.type';

//@ts-ignore
export const getCurrentSession = (sessions: Session[]): Session => {
  for (let i = 0; i < sessions.length; i++) {
    if (!sessions[i].status) {
      return sessions[i];
    }
  }
};
