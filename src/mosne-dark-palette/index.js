import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import IconAuto from './components/iconAuto';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: IconAuto,
	edit: Edit,
} );
