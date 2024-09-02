import { List } from 'react-native-paper';
import { menu } from '../db/menuHome';
import { useNavigation } from '@react-navigation/native';
function Home(){
    const navigation = useNavigation();
    return(
        <>
            <List.Section>
                <List.Subheader>Some title</List.Subheader>
                {menu.map((item)=>(
                    <List.Item
                        key={item.title}
                        titleStyle={{textAlign:"center"}} 
                        title={item.title} 
                        left={() => <List.Icon icon={item.icon}/>} 
                        onPress={() =>
                            navigation.navigate(item.screen, { listType: item.listType })
                        }
                    />
                ))}
            </List.Section>
        </>
    )
}
export default Home;