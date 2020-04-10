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

				onClick={
					function( ){
							location
							.href
						=	"/service/view/game/tic-tac-toe/create";
					}
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
