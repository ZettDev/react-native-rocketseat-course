import {useState} from "react";
import { FlatList } from 'react-native';

import {Header} from "@components/Header";
import {Highlight} from "@components/Highlight";
import {GroupCard} from "@components/GroupCard";
import {ListEmpty} from "@components/ListEmpty";
import {Button} from "@components/Button";

import {Container} from "@screens/Groups/styles";

export function Groups() {
    const [groups, setGroups] = useState<string[]>([]);

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
                renderItem= {({item}) => <GroupCard title={item}/>}
                contentContainerStyle={groups.length === 0 && {flex: 1}}
                ListEmptyComponent = {<ListEmpty message="Nenhuma turma encontrada..."/>}>
            </FlatList>

            <Button title="Criar nova turma"/>
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
