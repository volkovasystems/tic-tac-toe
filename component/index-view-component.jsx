"use strict";

ReactDOM
.render(
	(
		<div
			className={
				`
					index-view-component
					view-component
				`
			}
		>
			<TicTacToeLogoCommponent />
		</div>
	),

	(
		document
		.getElementById(
			"index-view-container"
		)
	)
);
