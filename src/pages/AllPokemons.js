import {
  useQuery,
} from '@tanstack/react-query'
import React, { useState } from "react";
import {
  Image,
  Box,
  chakra,
  Flex,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import bg000 from '../assets/imgs/bg.jpg';


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


function PokemonCard(props) {
  const infos = {
      id: props.id,
      name: props.name,
      number: props.pokedexId.toString().padStart(4, '0'),
      types: props.apiTypes,
      avatar: props.image,
  };
  const { id, name, number, types, avatar } = infos;
  return (
    <Flex
      maxW={'180px'}
      direction={'column'}
      width={'full'}
      justifyContent={'center'}
      position={'relative'}
      bg={'white'}
      >
      <Link
        href={'/pokemon/'+id}
        display={'flex'}
        textDecoration={'none'}
        _hover={{ textDecoration:'none'}}
        justifyContent={'center'}
        alignItems={'center'}
        width={'full'}
        height={'180px'}
        bg={'#eee'}
        rounded={'5px'}
      >        
        <Image
          src={avatar}
          height={'100%'}
          width={'100%'}
          objectFit={'contain'}
          alignSelf={'center'}
        />
      </Link>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
        bg={'white'}
        width={'full'}
        paddingLeft={'10px'}
        paddingRight={'10px'}
        paddingBottom={'10px'}
        >        
        <chakra.span
          fontWeight={'medium'}
          fontSize={'14px'}
          pb={2}
          color={'#777'}>
          No.{number}
        </chakra.span>
        <chakra.span
          fontWeight={'bold'}
          fontSize={'24px'}
          pb={1}>
          {name}
        </chakra.span>
        <Flex
        gap={'10px'}
        justifyContent={'space-between'}
        >
          {types.map((type, index) => (
            
            <chakra.span
            key={index}
            bg={btnColors[type['name']]?.bg}
            color={btnColors[type['name']]?.text}
            p={'2px 12px'}
            fontSize={'11px'}
            width={'80px'}
            rounded={'3px'}
            display={'flex'}
            justifyContent={'center'}
            >
              {type.name}              
            </chakra.span>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function AllPokemons() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/8').then(
        (res) => res.json(),
      ),
  })

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      width={'full'}
      overflow={'hidden'}
      minH={'100vh'}
      bg={`url(${bg000}) no-repeat`}
      bgSize={'100% 100%'}
      bgPos={'center center'}
      >
        <Flex
        textAlign={'center'}
        p={10}
        justifyContent={'center'}
        direction={'column'}
        width={'fit-content'}
        overflow={'hidden'}
        bg={'white'}
        >
          <SimpleGrid
            columns={{ base: 4, xl: 4 }}
            spacing={'5'}
            mt={0}
            mb={10}
            mx={'auto'}>
            {data.map((cardInfo, index) => (
              <PokemonCard key={index} {...cardInfo} index={index} />
            ))}
          </SimpleGrid>
          <Box
          marginBottom={'100px'}
          >
            <Link 
            textDecoration="none"
            bg={'#30a7d7'}
            color={'white'}
            rounded={'5px'}
            padding={'10px 25px'}
            _hover={{ 
              textDecoration: 'none',
              bg:'#4592c4'
            }}        
            >
              Charger d'autres Pokemons
            </Link>
          </Box>
        </Flex>
      
    </Flex>
  );
}
