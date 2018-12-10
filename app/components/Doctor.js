import React, {Component} from 'react'
import {Image, ScrollView, SectionList, Text, TouchableOpacity, View} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';
//import FontAwesome from '../../node_modules/@expo/vector-icons/fonts/FontAwesome.ttf';
import styles from './styles/doctor'

class Doctor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let doctor = this.props.doctor;

        return (
            <ScrollView style={styles.modal}>
                <View style={styles.toolbar}>
                    <TouchableOpacity onPress={this.props.closeModal}>
                        <FontAwesome name="close" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.headerWrapper}>
                        <Text style={styles.header}>
                            {`#${doctor.doctorNumber}`}
                        </Text>
                        <Image
                            source={{ uri: doctor.image }}
                            style={styles.thumbnail}
                        />
                    </View>

                    <SectionList
                        renderItem={({item, index, section}) => <Text style={styles.text} key={index}>{item}</Text>}

                        renderSectionHeader={({section: {title}}) => (
                            <Text style={styles.title}>{title}</Text>
                        )}

                        sections={[
                            {title: 'Description', data: [doctor.description]},
                            {title: 'Who Played Him:', data: [doctor.actor]},
                            {title: 'When:', data: [doctor.when]},
                            {title: 'Memorable Gadget/Item of Clothing:', data: [doctor.gadget]},
                            {title: 'Reason for Regeneration:', data: [doctor.regeneration]},
                            {title: 'Three Recommended Stories:', data: [doctor.stories]}
                        ]}

                        keyExtractor={(item, index) => item + index}
                    />

                    {/*<Text style={styles.text}>{doctor.description}</Text>*/}
                    {/*<Text style={styles.title}>{'Who Played Him:'}</Text>*/}
                    {/*<Text style={styles.text}>{doctor.actor}</Text>*/}
                    {/*<Text style={styles.title}>{'When:'}</Text>*/}
                    {/*<Text style={styles.text}>{doctor.when}</Text>*/}
                    {/*<Text style={styles.title}>{'Memorable Gadget/Item of Clothing:'}</Text>*/}
                    {/*<Text style={styles.text}>{doctor.gadget}</Text>*/}
                    {/*<Text style={styles.title}>{'Reason for Regeneration:'}</Text>*/}
                    {/*<Text style={styles.text}>{doctor.regeneration}</Text>*/}
                    {/*<Text style={styles.title}>{'Three Recommended Stories:'}</Text>*/}
                    {/*<Text style={styles.text}>{doctor.stories}</Text>*/}
                </View>
            </ScrollView>
        )
    }
}

export default Doctor
