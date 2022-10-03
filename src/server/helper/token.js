import Jwt  from 'jsonwebtoken';

export const generateJWT = (id, roles) => {
	const payload = {
		id,
		roles,
	};
	return Jwt.sign(payload, 'DSFDSFDSFDSF dsf');
};

