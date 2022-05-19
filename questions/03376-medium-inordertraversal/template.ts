interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>] : []

// 中序序遍历
// 中->左->右的方式遍历
// 递归查找即可
// 递归过程

const tree1 = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
} as const

type lala = InorderTraversal<typeof tree1>
