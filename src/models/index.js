exports.user = {
  email: { in: ["body"], isString: true, escape: true, trim: true },
  password: { in: ["body"], isString: true, escape: true, trim: true }
}

exports.nick = {
  nick: { in: ["body"], isString: true, escape: true, trim: true },
  user_id: { in: ["body"], isString: true, escape: true, trim: true }
}