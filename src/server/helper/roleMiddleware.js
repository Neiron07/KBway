import Jwt from 'jsonwebtoken';

export function AdminRole(roles) {
	return function (req, res, next){
		if (req.method === 'OPTIONS') {
			next();
		}

		try {
			const token = req.headers.authorization.split(' ')[1];
			if (!token) {
				return res.status(403).json({ msg: 'unauth user err' });
			}
			const {roles: userRoles} = Jwt.verify(token, 'DSFDSFDSFDSF dsf');
			let hasRole = false;
			userRoles.forEach(role => {
				if (roles.includes(role)) {
					hasRole = true;
				}
			});
			if (!hasRole){
				return res.status(401).json({'msg':'no permis'});
			}
			next();
		} catch (error) {
			return res.status(403).json({ msg: 'unauth user' });
		}
	};
}