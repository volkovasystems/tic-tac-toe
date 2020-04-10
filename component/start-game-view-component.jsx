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
						history
						.back( );
					}
				}
			>
				back
			</button>
		</div>
	),

	(
		document
		.getElementById(
			"start-game-view-container"
		)
	)
);
