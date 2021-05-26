import styled from "styled-components";
import image_desktop from "image/image-header-desktop.jpg";
import image_mobile from "image/image-header-mobile.jpg";

function App() {
	const orientation = window.screen.availHeight > window.screen.availWidth;

	return (
		<div className="App">
			<CardContainer>
				<Content>
					<h1>
						Get <i>insights</i> that help your business grow.
					</h1>
					<p>
						Discover the benefits of data analytics and make better decisions regarding revenue, customer
						experience, and overall efficiency.
					</p>
					<Detail>
						<div>
							<span>10k+</span>
							<span>Companies</span>
						</div>
						<div>
							<span>314</span>
							<span>Templates</span>
						</div>
						<div>
							<span>12M+</span>
							<span>Queries</span>
						</div>
					</Detail>
				</Content>
				<Image>
					<img src={orientation ? image_mobile : image_desktop} alt="" />
				</Image>
			</CardContainer>
		</div>
	);
}

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 52% 48%;
	background-color: var(--primary-bg-card);
	border-radius: 0.6vw;
	overflow: hidden;
	width: 77%;

	@media screen and (orientation: portrait) {
		width: initial;
		grid-template-columns: initial;
		grid-template-rows: auto auto;
		max-width: 90%;
		border-radius: 1vh;
		margin: 2vh auto 0;
	}

	> * {
		height: 100%;
		flex: 1 1 auto;
	}
`;

const Content = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	color: var(--neutral-heading);
	height: 100%;
	padding: 4.4vw 9vw 4.4vw 5vw;
	flex-basis: 51.4%;

	@media screen and (orientation: portrait) {
		grid-row: 2/3;
		text-align: center;
		padding: 5vh;
	}

	h1 {
		font-family: "Inter";
		font-weight: 700;
		font-size: 2.4vw;
		line-height: 1.3;

		@media screen and (orientation: portrait) {
			font-size: 3vh;
			padding: 0 1vh;
		}

		i {
			color: var(--primary-accent);
		}
	}

	p {
		font-size: 1vw;
		font-family: "Lexend Deca";
		color: var(--neutral-stats-heading);
		margin-top: 2vw;
		line-height: 1.7;

		@media screen and (orientation: portrait) {
			font-size: 1.7vh;
			margin-top: 2vh;
		}
	}
`;

const Detail = styled.div`
	display: flex;
	margin-top: auto;

	@media screen and (orientation: portrait) {
		flex-direction: column;
		margin-top: 5vh;
	}

	> * + * {
		margin-left: 4.5vw;

		@media screen and (orientation: portrait) {
			margin-left: 0;
			margin-top: 4.5vh;
		}
	}

	> div {
		display: flex;
		flex-direction: column;

		span {
			&:nth-child(1) {
				font-family: "Inter";
				font-weight: 700;
				font-size: 1.7vw;
				margin-bottom: 0.7vw;
				color: var(--neutral-para);

				@media screen and (orientation: portrait) {
					font-size: 2.5vh;
					margin-bottom: 1.4vh;
				}
			}

			&:nth-child(2) {
				font-size: 1vw;
				text-transform: uppercase;
				font-family: "Inter";
				font-family: 400;
				color: var(--neutral-stats-heading);

				@media screen and (orientation: portrait) {
					font-size: 1.5vh;
				}
			}
		}
	}
`;

const Image = styled.div`
	position: relative;
	background-image: url(${image_desktop});
	background-size: cover;

	@media screen and (orientation: portrait) {
		background-image: url(${image_mobile});
		grid-row: 1/2;
	}

	img {
		width: 100%;
		visibility: hidden;
	}

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--primary-accent);
		opacity: 0.5;
	}
`;

export default App;
