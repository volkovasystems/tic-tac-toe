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
			<TicTacToeBoardComponent />
		</div>
	),

	(
		document
		.getElementById(
			"play-game-view-container"
		)
	)
);
