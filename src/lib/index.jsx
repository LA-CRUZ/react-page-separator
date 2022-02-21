import DragHandleIcon from '@mui/icons-material/DragHandle';
import React from 'react';

import SeparatorRenderer from './components/SeparatorRenderer';
// TODO: Add color change, separator type change, thickness change
const separator = {
	Renderer: SeparatorRenderer,
	id: 'Separator',
	version: 1,
	title: 'Separator',
	description: 'Basic and simple line separator.',
	cellStyle: {
		margin: 0,
	},
	icon: <DragHandleIcon />,
};

export default separator;
