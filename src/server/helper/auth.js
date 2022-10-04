import Jwt from 'jsonwebtoken';

export function checkUser(req, res, next) {
	if (req.method === 'OPTIONS') {
		next();
	}

	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return res.status(403).json({ msg: 'unauth user err' });
		}
		const decodedData = Jwt.verify(token, 'DSFDSFDSFDSF dsf');
		req.user = decodedData;
		next();
	} catch (error) {
		console.log(error);
		return res.status(403).json({ msg: 'unauth user' });
	}
}