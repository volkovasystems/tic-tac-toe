"use strict";

ReactDOM
.render(
	(
		<div
			className={
				`
					play-game-view-component
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
			"play-game-view-container"
		)
	)
);
