"use strict";

ReactDOM
.render(
	(
		<div
			className={
				`
					start-game-view-component
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
			"start-game-view-container"
		)
	)
);
