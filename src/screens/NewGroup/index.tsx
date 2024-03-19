import {Container, Content, Icon} from "@screens/NewGroup/styles";
import {Header} from "@components/Header";
import {Highlight} from "@components/Highlight";
import {Button} from "@components/Button";
import {Input} from "@components/Input";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton/>

            <Content>
                <Icon/>
                <Highlight
                    title="Nova Turma"
                    subTitle="Crie uma nova turma e adicione novos integrantes"
                />

                <Input placeholder= "Digite o nome da turma..."/>

                <Button title="Criar" style={{marginTop: 20}}/>

            </Content>

        </Container>
    );
}