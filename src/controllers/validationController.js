const { validationResult, check, oneOf, body, param } = require('express-validator');
exports.validate = (req, res, next) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		next();
	}
};

exports.chkStr = str => {
	return check(str, `${str} is required, and must contain a valid string`).isString().not().isEmpty().trim().escape();
}

exports.optional = input => {
	return check(input, `${input} is not valid`).isNumeric().trim().escape();
}

exports.chkEitherStr = (str1, str2) => {
	return oneOf([
		this.chkStr(str1),
		this.chkStr(str2)
	], `Either ${str1} or ${str2} must be present, and contain a valid string`)
}