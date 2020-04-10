"use strict";

ReactDOM
.render(
	(
		<div
			className={
				`
					create-game-view-component
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
			"create-game-view-container"
		)
	)
);
