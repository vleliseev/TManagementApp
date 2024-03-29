import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Subheading, Title, Button } from 'react-native-paper';

import { getGoalProgressString } from '../../helpers/tasks';
import { Goal } from '../../reducers/tasks';

interface SectionProps {
	data: Goal;
	onGoalUpdate: (progress: number) => void;
	onSetManualPress?: () => void;
}

const styles = StyleSheet.create({
	sectionControls: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 6,
	},
});

const SimpleGoalSection: React.FC<SectionProps> = ({ data, onGoalUpdate, onSetManualPress }) => {
	const { progress } = data;

	const incrementProgress = React.useCallback(
		() => onGoalUpdate(progress + 1),
		[onGoalUpdate, progress],
	);

	return (
		<View>
			<View>
				<Title>Goal</Title>
				<View>
					<Subheading>{getGoalProgressString(data)}</Subheading>
					<View style={styles.sectionControls}>
						<Button mode="contained" onPress={incrementProgress}>Add 1</Button>
						<Button mode="contained" onPress={onSetManualPress}>Set manually</Button>
					</View>
				</View>
			</View>
		</View>
	);
};

export default SimpleGoalSection;
