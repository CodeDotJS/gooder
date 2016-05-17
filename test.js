import test from 'ava';
import fn from './';

test(async t => {
	const gooder = await fn('https://drive.google.com/file/d/0B3vyNXp6qDWwbXlwZllTd3BuUlk/edit?usp=sharing');

	t.is(gooder, 'https://googledrive.com/host/0B3vyNXp6qDWwbXlwZllTd3BuUlk');
});
