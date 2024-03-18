import {useState} from "react";
import {FlatList} from "react-native";

import {Header} from "@components/Header";
import {Highlight} from "@components/Highlight";
import {GroupCard} from "@components/GroupCard";

import {Container} from "@screens/Groups/styles";

export function Groups() {
    const [groups, setGroups] = useState<string[]>(['Amigos', 'Galera do Ignite']);

    return (
        <Container>
            <Header/>

            <Highlight
                title="Turmas"
                subTitle="Jogue com a sua turma!"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem= {({item}) => <GroupCard title={item}/>}>
            </FlatList>
        </Container>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
