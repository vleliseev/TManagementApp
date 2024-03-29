import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Subheading, Title, Text, RadioButton } from 'react-native-paper';

import { getSubtasksProgressString } from '../../helpers/tasks';
import { Task } from '../../reducers/tasks';
import { ById } from '../../util/types';

interface SectionProps {
	subtasks: ById<Task>;
	onSubtaskUpdate: (id: string, done: boolean) => void;
}

const styles = StyleSheet.create({
	subtaskItem: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
	},

	subtaskDone: {
		textDecorationLine: 'line-through',
		textDecorationStyle: 'solid',
	},

	paragraph: {
		paddingLeft: 10,
		paddingRight: 10,
	},
});

const SubtasksSection: React.FC<SectionProps> = ({ subtasks, onSubtaskUpdate }) => {
	const toggleSubtaskDone = (id: string) => onSubtaskUpdate(id, !subtasks[id].done);

	return (
		<View>
			<View>
				<Title>Subtasks</Title>
				<View style={styles.paragraph}>
					<Subheading>{getSubtasksProgressString(subtasks)}</Subheading>
					<View>
						{Object.values(subtasks).map((subtask, i) => (
							<View style={styles.subtaskItem} key={i}>
								<RadioButton value={subtask.name} onPress={() => toggleSubtaskDone(subtask.id)} status={subtask.done ? 'checked' : 'unchecked'} />
								<Text style={subtask.done && styles.subtaskDone}>{subtask.name}</Text>
							</View>
						))}
					</View>
				</View>
			</View>
		</View>
	);
};

export default SubtasksSection;
