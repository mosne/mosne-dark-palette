import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import IconAuto from './iconAuto';
import metadata from './block.json';

registerBlockType( metadata.name, {
	icon: IconAuto,
	edit: Edit,
	save,
} );
