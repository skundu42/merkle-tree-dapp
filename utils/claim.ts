import { createPublicClient,createWalletClient,http,custom} from 'viem'
import { shardeumSphinx, polygonMumbai } from 'viem/chains'
import { wagmiAbi } from './abi'


export const mintTokens = async () => {

    const client = createPublicClient({ 
        chain: polygonMumbai, 
        transport: http(), 
    }) 
    
    const walletClient = createWalletClient({
        chain: polygonMumbai,
        transport: custom(window.ethereum!)
        })

    const accounts = await walletClient.getAddresses();
    const account = accounts[0];

    const { request } = await client.simulateContract({
        account,
        address: '0xE8BD6d39BE1EAbc9DC165432a52034D72f68aEf0',
        abi: wagmiAbi,
        functionName: 'mint',
        args: [account],
    })

    const hash = await walletClient.writeContract(request);
    console.log(`Transaction hash: ${hash}`);
    return hash;
  
}
