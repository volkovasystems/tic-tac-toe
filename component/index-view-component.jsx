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

				onClick={
					async	function( ){
								await	requestShutdownGame( );

								window
								.open(
									"",
									"_self"
								)
								.document
								.write(
									(
										`
											<title>
												Game Over | Tic Tac Toe Game
											</title>
											<style>
												body
												{
													display: flex;
													flex-direction: column;
													justify-content: center;

													margin: 0px;
													padding: 0px;
													border: 0;

													width: 100vw;
													height: 100vh;
												}
											</style>
											<center
												style="
													font-family: monospace;
													font-size: 20px;
												"
											>
												Thank You!
											</center>
										`
									)
								);
							}
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
