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
						=	"/";
					}
				}
			>
				home
			</button>

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
						=	"/service/view/game/tic-tac-toe/start?state=[create-game]";
					}
				}
			>
				create
			</button>

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
						=	"/service/view/game/tic-tac-toe/start?state=[connect-game]";
					}
				}
			>
				connect
			</button>
		</div>
	),

	(
		document
		.getElementById(
			"create-game-view-container"
		)
	)
);
