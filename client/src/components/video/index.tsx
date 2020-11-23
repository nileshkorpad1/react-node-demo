import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";
import Styled from "styled-components";
import VideoList from "./VideoList";
import ErrorBoundary from "../../common/ErrorBoundary";

const PlayListText = Styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

const Videos: React.FC = () => {
  let location: any = useLocation();
  return (
		<>
			<ErrorBoundary>
				<Grid doubling data-testid="listContainer">
					<Grid.Row
						style={{
							background: 'rgb(118 119 119)',
							color: '#ffff',
							paddingLeft: '10px',
							justifyContent: 'start',
						}}
					>
						<h2>Simplified Youtube</h2>
						<Link
							to={{
								pathname: `upload`,
								/* open the path in modal */
								state: { ismodal: location },
							}}
							style={{
								marginLeft: '10px',
							}}
						>
							<Button
								data-testid="uploadBtn"
								size="large"
								primary
							>
								Upload Video
							</Button>
						</Link>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column>
							<PlayListText>Your Uploads</PlayListText>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row data-testid="videoList">
						<VideoList />
					</Grid.Row>
				</Grid>
			</ErrorBoundary>
		</>
  );
};

export default Videos;
