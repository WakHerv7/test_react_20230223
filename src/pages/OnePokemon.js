import {
  chakra,
  Flex,
  Image,
} from '@chakra-ui/react';
import { useParams } from "react-router-dom";
import {useQuery} from '@tanstack/react-query';
import { TbPokeball, TbGenderMale, TbGenderFemale } from "react-icons/tb";
import bg000 from '../assets/imgs/bg.jpg';
import notch00 from '../assets/imgs/notch.png';



const btnColors = {
  'Plante':{
    bg:'#9bcc50',
    text:'#212121',
  },
  'Poison':{
    bg:'#b97fc9',
    text:'#fff',
  },
  'Feu':{
    bg:'#fd7d24',
    text:'#fff',
  },
  'Eau':{
    bg:'#4592c4',
    text:'#fff',
  },
  'Psy':{
    bg:'#f366b9',
    text:'#fff',
  },
  'Vol':{
    bg:'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
    text:'#212121',
  },
  'Glace':{
    bg:'#51c4e7',
    text:'#212121',
  },
}



export default function OnePokemon() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://pokebuildapi.fr/api/v1/pokemon/'+id).then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const props = {
    name: data.name,
    number: data.pokedexId.toString().padStart(4, '0'),
    types: data.apiTypes,
    faiblesses: data.apiResistances.filter((value) => value['damage_relation'] == 'vulnerable'),
    version1: 'Il y a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour.',
    version2: 'S’il se sent menacé, il rétracte ses pattes dans sa carapace pour se protéger et crache de l’eau.',
    taille:'0.7m',
    poids:'6,9kg',
    sexes:['m','f'],
    categorie:'Graine',
    talent:'Engrais',
    avatar: data.image,
  };
  const { name, number, types, 
    faiblesses, version1, version2, 
    taille, poids, sexes,
    categorie, talent, avatar} = props;
  return (
    <Flex
      textAlign={'center'}
      justifyContent={'center'}
      width={'full'}
      overflow={'hidden'}
      minH={'100vh'}
      bg={`url(${bg000}) no-repeat`}
      bgSize={'100% 100%'}
      bgPos={'center center'}
      >
        <Flex
        position={'relative'}
        textAlign={'center'}
        p={10}
        pt={'150px'}
        justifyContent={'center'}
        direction={'column'}
        width={'80%'}
        maxW={'1000px'}
        bg={'white'}
        >
          <Flex
          position={'absolute'}
          top={0}
          left={'50%'}
          transform={'translateX(-50%)'}
          zIndex={100}
          width={'100vw'}
          gap={1}
          height={100}
          >
            <Flex
            bg={'#aaa'}
            justifyContent={'flex-end'}
            textAlign={'right'}
            width={'100%'}
            height={'100%'}
            position={'relative'}
            _after={{
              content:`""`,
              position:"absolute",
              bottom:0,
              right: 0,
              background:`white`,
              width:'50%',
              height:'50px',
              zIndex:110,
              border: 'none',
              boxShadow: 'none',
            }}
            _before={{
              content:`""`,
              position:"absolute",
              bottom:0,
              right: '50%',
              background:`url(${notch00}) no-repeat`,
              backgroundSize: 'auto 100%',
              backgroundPosition: '00% 100%',
              width:'76px',
              height:'50px',
              zIndex:101,
              border: 'none',
              boxShadow: 'none',
            }}
            
            >
              <Flex 
              gap={7}
              mt={2}
              mr={0}
              pr={100}
              fontSize={22}
              >
                {/* <chakra.span 
                color={'white'}
                fontWeight={'bold'}>
                  No. 0001
                </chakra.span>
                <chakra.span 
                color={'#212121'}
                fontWeight={'bold'}>
                  Dracaufeu
                </chakra.span> */}
              </Flex>
              
            </Flex>

            <Flex
            bg={'#aaa'}
            justifyContent={'flex-start'}
            textAlign={'left'}
            width={'100%'}
            height={'100%'}
            position={'relative'}
            _after={{
              content:`""`,
              position:"absolute",
              bottom:0,
              left: 0,
              background:`white`,
              width:'50%',
              height:'50px',
              zIndex:110,
              border: 'none',
              boxShadow: 'none',
            }}
            _before={{
              content:`""`,
              position:"absolute",
              bottom:0,
              left: '50%',
              background:`url(${notch00}) no-repeat`,
              backgroundSize: 'auto 100%',
              backgroundPosition: '100% 100%',
              width:'76px',
              height:'50px',
              zIndex:101,
              border: 'none',
              boxShadow: 'none',
            }}         
            >
              <Flex 
              gap={7}
              mt={2}
              ml={0}
              pl={100}
              fontSize={22}
              >
                {/* <chakra.span 
                color={'white'}                
                fontWeight={'bold'}>
                  No. 0001
                </chakra.span>
                <chakra.span 
                color={'#212121'}
                fontWeight={'bold'}>
                  Dracaufeu
                </chakra.span> */}
              </Flex>
              
            </Flex>
            
            <Flex
            position={'absolute'}
            bottom={'0px'}
            left={'50%'}
            transform={'translateX(-50%)'}
            bg={'white'}
            fontSize={'30px'}
            gap={2}
            zIndex={200}
            >              
              <chakra.span
              color={'#212121'}
              >
                {name}
              </chakra.span>
              <chakra.span
              color={'#777'}
              >
                No. {number}
              </chakra.span>
            </Flex>

          </Flex>
          
          <Flex
            maxW={'100%'}
            width={'100%'}
            justifyContent={'center'}
            position={'relative'}
            bg={'white'}
            gap={3}
            mt={0}
            >
            <Flex
              justifyContent={'center'}
              alignItems={'center'}
              width={'full'}
              height={'500px'}
              bg={'#eee'}
              rounded={'8px'}
            >
              <Image
                src={avatar}
                height={'auto'}
                width={'100%'}
                objectFit={'contain'}
                alignSelf={'center'}
              />
            </Flex>
            <Flex
              direction={'column'}
              textAlign={'left'}
              gap={5}
              bg={'white'}
              width={'full'}
              maxW={'450px'}
              paddingLeft={'10px'}
              paddingRight={'10px'}
              paddingBottom={'10px'}
              >        
              <chakra.span
                fontWeight={'medium'}
                fontSize={'21px'}
                pb={2}>
                {version1}
              </chakra.span>
              <chakra.span
                fontSize={'21px'}
                pb={1}
                display={'flex'}
                alignItems={'center'}
                gap={2}
                >
                Versions: 
                <TbPokeball size={30} color={'#4592c4'}/>
                <TbPokeball size={30} color={'red'}/>
              </chakra.span>
              <Flex
              p={5}
              rounded={'5px'}
              bg={"#30a7d7"}
              gap={5}
              justifyContent={'space-between'}
              width={'full'}
              >
                <Flex
                  width={'full'}
                  gap={2}
                  direction={'column'}
                >
                  <Flex
                  gap={'5px'}
                  direction={'column'}
                  >
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'17px'}
                      color={'white'}
                      >
                      Taille
                    </chakra.span>
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'21px'}
                      color={'#212121'}
                      >
                      {taille}
                    </chakra.span>
                  </Flex>
                  <Flex
                  gap={'5px'}
                  direction={'column'}
                  >
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'17px'}
                      color={'white'}
                      >
                      Poids
                    </chakra.span>
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'21px'}
                      color={'#212121'}
                      >
                      {poids}
                    </chakra.span>
                  </Flex>
                  <Flex
                  gap={'5px'}
                  direction={'column'}
                  >
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'17px'}
                      color={'white'}
                      >
                      Sexe
                    </chakra.span>
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'21px'}
                      color={'#212121'}
                      display={'flex'}
                      alignItems={'center'}
                      gap={2}
                      >
                      {sexes.map((sexe, index) => (
                        sexe == 'f' ?
                        <TbGenderFemale size={30} color={'#212121'}/>
                        :
                        <TbGenderMale size={30} color={'#212121'}/>
                      ))}
                    </chakra.span>
                  </Flex>

                </Flex>
                <Flex
                  width={'full'}
                  gap={2}
                  direction={'column'}
                >
                  <Flex
                  gap={'5px'}
                  direction={'column'}
                  >
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'17px'}
                      color={'white'}
                      >
                      Catégorie
                    </chakra.span>
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'21px'}
                      color={'#212121'}
                      >
                      {categorie}
                    </chakra.span>
                  </Flex>
                  <Flex
                  gap={'5px'}
                  direction={'column'}
                  >
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'17px'}
                      color={'white'}
                      >
                      Talent
                    </chakra.span>
                    <chakra.span
                      fontWeight={'medium'}
                      fontSize={'21px'}
                      color={'#212121'}
                      >
                      {talent}
                    </chakra.span>
                  </Flex>
                  

                </Flex>
              </Flex>

              <Flex
                direction={'column'}
                gap={2}
              >
                <chakra.span
                fontSize={'21px'}
                >
                Types
                </chakra.span>
                <Flex
                gap={'10px'}
                flexWrap={'wrap'}
                >
                  {types.map((type, index) => (
                    <chakra.span
                    key={index}
                    bg={btnColors[type['name']]?.bg}
                    color={btnColors[type['name']]?.text}
                    p={'5px 45px'}
                    width={'120px'}
                    fontSize={'15px'}
                    rounded={'3px'}
                    display={'flex'}
                    justifyContent={'center'}
                    >
                      {type.name}
                    </chakra.span>
                  ))}
                </Flex>
              </Flex>

              <Flex
                direction={'column'}
                gap={2}
              >
                <chakra.span
                fontSize={'21px'}
                >
                Faiblesses
                </chakra.span>
                <Flex
                gap={'10px'}
                flexWrap={'wrap'}
                >
                  {faiblesses.map((faiblesse, index) => (
                    <chakra.span
                    key={index}
                    bg={btnColors[faiblesse['name']]?.bg}
                    color={btnColors[faiblesse['name']]?.text}
                    p={'5px 45px'}
                    width={'120px'}
                    fontSize={'15px'}
                    rounded={'3px'}
                    display={'flex'}
                    justifyContent={'center'}
                    >
                      {faiblesse.name}
                    </chakra.span>
                  ))}
                </Flex>
              </Flex>

              
            </Flex>
          </Flex>

        </Flex>
      
    </Flex>
  );
}
