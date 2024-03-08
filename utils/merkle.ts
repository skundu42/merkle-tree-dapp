import { MerkleTree } from 'merkletreejs';
import { ethers } from 'ethers';

const hashAddress = (address: string) => ethers.utils.keccak256(ethers.utils.arrayify(address));

export const createMerkleTree = (allowlistAddresses: string[]) => {
  const leafNodes = allowlistAddresses.map(hashAddress);
  return new MerkleTree(leafNodes, hashAddress, { sortPairs: true });
};

export const getMerkleProof = (merkleTree: MerkleTree, address: string) => {
  const hashedAddress = hashAddress(address);
  return merkleTree.getHexProof(hashedAddress);
};

export const verifyAddress = (merkleTree: MerkleTree, address: string, proof: string[]) => {
  const hashedAddress = hashAddress(address);
  return merkleTree.verify(proof, hashedAddress, merkleTree.getRoot());
};

export const getRootHash = (merkleTree: MerkleTree) => {
  return merkleTree.getRoot().toString('hex');
};
