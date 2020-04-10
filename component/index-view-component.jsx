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

			<button
				className={
					`
						control-component
					`
				}
			>
				play
			</button>

			<button
				className={
					`
						control-component
					`
				}
			>
				shutdown
			</button>
		</div>
	),

	(
		document
		.getElementById(
			"index-view-container"
		)
	)
);
