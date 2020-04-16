import React from 'react';
import 'antd/dist/antd.css';
import './styles.css';
import { Carousel } from 'antd';
import { Foto1, Foto2, Foto3, Foto4 } from './galery';

const App = () => {
	var settings = {
		infinite: true,
		speed: 1500,
		pauseOnHover: false
	};

	return (
		<Carousel autoplay {...settings}>
			<div>
				<Foto1 />
			</div>
			<div>
				<Foto2 />
			</div>
			<div>
				<Foto3 />
			</div>
			<div>
				<Foto4 />
			</div>
		</Carousel>
	);
};
export default App;
