export type CssCursorKeyword =
	| "auto"
	| "default"
	| "none"
	| "context-menu"
	| "help"
	| "pointer"
	| "progress"
	| "wait"
	| "cell"
	| "crosshair"
	| "text"
	| "vertical-text"
	| "alias"
	| "copy"
	| "move"
	| "no-drop"
	| "not-allowed"
	| "grab"
	| "grabbing"
	| "all-scroll"
	| "col-resize"
	| "row-resize"
	| "n-resize"
	| "e-resize"
	| "s-resize"
	| "w-resize"
	| "ne-resize"
	| "nw-resize"
	| "se-resize"
	| "sw-resize"
	| "ew-resize"
	| "ns-resize"
	| "nesw-resize"
	| "nwse-resize"
	| "zoom-in"
	| "zoom-out";

export type CursorSpec = {
	name: CssCursorKeyword;
	hint: string;
};

export const CURSORS: CursorSpec[] = [
	{ name: "auto", hint: "Browser chooses a cursor from context" },
	{ name: "default", hint: "Platform default arrow" },
	{ name: "none", hint: "No cursor is rendered" },
	{ name: "context-menu", hint: "Context menu is available" },
	{ name: "help", hint: "Help is available" },
	{ name: "pointer", hint: "The element is a link or control" },
	{ name: "progress", hint: "Busy, but the UI can still be used" },
	{ name: "wait", hint: "Busy; interaction should wait" },
	{ name: "cell", hint: "A table cell or grid cell can be selected" },
	{ name: "crosshair", hint: "Precise selection, often for drawing" },
	{ name: "text", hint: "Text can be selected" },
	{ name: "vertical-text", hint: "Vertical text can be selected" },
	{ name: "alias", hint: "An alias or shortcut will be created" },
	{ name: "copy", hint: "Something will be copied" },
	{ name: "move", hint: "Something can be moved" },
	{ name: "no-drop", hint: "The dragged item cannot be dropped here" },
	{ name: "not-allowed", hint: "The requested action will not be performed" },
	{ name: "grab", hint: "Something can be grabbed" },
	{ name: "grabbing", hint: "Something is being grabbed" },
	{ name: "all-scroll", hint: "Something can be scrolled in any direction" },
	{ name: "col-resize", hint: "A column can be resized horizontally" },
	{ name: "row-resize", hint: "A row can be resized vertically" },
	{ name: "n-resize", hint: "The north edge can be moved" },
	{ name: "e-resize", hint: "The east edge can be moved" },
	{ name: "s-resize", hint: "The south edge can be moved" },
	{ name: "w-resize", hint: "The west edge can be moved" },
	{ name: "ne-resize", hint: "The north-east corner can be moved" },
	{ name: "nw-resize", hint: "The north-west corner can be moved" },
	{ name: "se-resize", hint: "The south-east corner can be moved" },
	{ name: "sw-resize", hint: "The south-west corner can be moved" },
	{ name: "ew-resize", hint: "The east-west edges can be moved" },
	{ name: "ns-resize", hint: "The north-south edges can be moved" },
	{
		name: "nesw-resize",
		hint: "The north-east / south-west edges can be moved",
	},
	{
		name: "nwse-resize",
		hint: "The north-west / south-east edges can be moved",
	},
	{ name: "zoom-in", hint: "Something can be zoomed in" },
	{ name: "zoom-out", hint: "Something can be zoomed out" },
];
